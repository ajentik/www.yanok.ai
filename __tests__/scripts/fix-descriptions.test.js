const fs = require('fs');
const path = require('path');

// Import the exported function from the script
const fixDescriptions = require('../../scripts/fix-descriptions');

// Mock the filesystem
jest.mock('fs');
jest.mock('path');

describe('fix-descriptions.js script', () => {
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  
  beforeEach(() => {
    // Mock filesystem
    fs.readdirSync = jest.fn().mockReturnValue(['test1.js', 'test2.js']);
    fs.readFileSync = jest.fn().mockImplementation((filePath) => {
      if (filePath.includes('test1.js')) {
        return 'export default function Page() { return <Layout description="Test description" />; }';
      } else {
        return 'export default function Page() { return <Layout content="Test content" />; }';
      }
    });
    fs.writeFileSync = jest.fn();
    fs.existsSync = jest.fn().mockReturnValue(true);
    
    // Mock path.join
    path.join = jest.fn().mockImplementation((...args) => args.join('/'));
    
    // Suppress console.log during tests
    console.log = jest.fn();
    console.error = jest.fn();
  });
  
  afterEach(() => {
    jest.resetAllMocks();
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });
  
  it('processes JS files and fixes description attribute syntax', () => {
    // Call the exported function with a test directory path
    const result = fixDescriptions('test-directory');
    
    // Check that the function returns success
    expect(result).toBe(true);
    
    // Check that files were read
    expect(fs.readdirSync).toHaveBeenCalledWith('test-directory');
    expect(fs.readFileSync).toHaveBeenCalledTimes(2);
    
    // Check that files were written with fixed content
    expect(fs.writeFileSync).toHaveBeenCalledTimes(2);
    
    // Create captured content array to check the transformations
    const writeFileCalls = fs.writeFileSync.mock.calls;
    
    // Verify first file transformation
    expect(writeFileCalls[0][0]).toContain('test1.js');
    expect(writeFileCalls[0][1]).toContain('description={`Test description`}');
    
    // Verify second file transformation
    expect(writeFileCalls[1][0]).toContain('test2.js');
    expect(writeFileCalls[1][1]).toContain('content={`Test content`}');
  });
  
  it('properly escapes backticks in attribute values', () => {
    // Mock readFileSync to return content with backticks
    fs.readFileSync = jest.fn().mockReturnValue(
      'export default function Page() { return <Layout description="Test `with` backticks" />; }'
    );
    
    // Call the function
    const result = fixDescriptions('test-directory');
    
    // Check that the function returns success
    expect(result).toBe(true);
    
    // Check that backticks are properly escaped
    const writeFileCall = fs.writeFileSync.mock.calls[0];
    expect(writeFileCall[1]).toContain('description={`Test \\`with\\` backticks`}');
  });
  
  it('handles errors gracefully', () => {
    // Mock readdirSync to throw an error
    const expectedError = new Error('Directory not found');
    fs.readdirSync = jest.fn().mockImplementation(() => {
      throw expectedError;
    });
    
    // Call the function and check that it returns false on error
    const result = fixDescriptions('nonexistent-directory');
    expect(result).toBe(false);
    
    // Check that the error was logged
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error processing files in nonexistent-directory:'),
      expectedError
    );
  });
});
