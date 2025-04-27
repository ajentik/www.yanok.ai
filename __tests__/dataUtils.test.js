import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// We need to mock the modules first
jest.mock('fs');
jest.mock('path');
jest.mock('js-yaml');

// Create the mock function before using it in the module mock
const mockParseFrontMatter = jest.fn();

// Now mock the dataUtils module with the already created mockParseFrontMatter
jest.mock('../src/lib/dataUtils', () => {
  const originalModule = jest.requireActual('../src/lib/dataUtils');
  
  return {
    ...originalModule,
    parseFrontMatter: mockParseFrontMatter
  };
});

// Now import the functions after setting up all the mocks
import {
  readYamlData,
  parseFrontMatter,
  mapJekyllLayoutToNextComponent,
  migrateJekyllFiles,
} from '../src/lib/dataUtils';

describe('dataUtils functions', () => {
  describe('readYamlData', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it('should read and parse YAML file correctly', () => {
      // Mock test data
      const mockYamlContent = `
        item1: value1
        item2: value2
        list:
          - item1
          - item2
      `;
      
      const expectedData = {
        item1: 'value1',
        item2: 'value2',
        list: ['item1', 'item2']
      };
      
      // Setup mocks
      fs.readFileSync.mockReturnValue(mockYamlContent);
      yaml.load.mockReturnValue(expectedData);
      
      // Call the function
      const result = readYamlData('test.yaml');
      
      // Assertions
      expect(fs.readFileSync).toHaveBeenCalledWith('test.yaml', 'utf8');
      expect(yaml.load).toHaveBeenCalledWith(mockYamlContent);
      expect(result).toEqual(expectedData);
    });
    
    it('should handle errors and return null', () => {
      // Mock fs.readFileSync to throw an error
      fs.readFileSync.mockImplementation(() => {
        throw new Error('File not found');
      });
      
      // Mock console.error to prevent output during test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // Call the function
      const result = readYamlData('nonexistent.yaml');
      
      // Assertions
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error reading YAML file nonexistent.yaml:'),
        expect.any(Error)
      );
      
      // Restore console.error
      consoleSpy.mockRestore();
    });
  });
  
  describe('parseFrontMatter', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it('should parse front matter and content correctly', () => {
      // Mock file content with front matter
      const mockFileContent = `---
title: Test Title
description: Test Description
layout: default
---
# Main Content

This is the main content of the file.`;
      
      // Expected result
      const expectedFrontMatter = {
        title: 'Test Title',
        description: 'Test Description',
        layout: 'default'
      };
      
      // Setup mocks
      fs.readFileSync.mockReturnValue(mockFileContent);
      yaml.load.mockReturnValue(expectedFrontMatter);
      
      // Call the function
      const result = parseFrontMatter('test.md');
      
      // Assertions
      expect(fs.readFileSync).toHaveBeenCalledWith('test.md', 'utf8');
      expect(yaml.load).toHaveBeenCalled();
      expect(result).toEqual({
        frontMatter: expectedFrontMatter,
        content: '# Main Content\n\nThis is the main content of the file.'
      });
    });
    
    it('should handle files without front matter', () => {
      // Mock file content without front matter
      const mockFileContent = '# Main Content\n\nThis is the main content of the file.';
      
      // Setup mocks
      fs.readFileSync.mockReturnValue(mockFileContent);
      
      // Call the function
      const result = parseFrontMatter('test.md');
      
      // Assertions
      expect(result).toEqual({
        frontMatter: {},
        content: mockFileContent
      });
    });
    
    it('should handle errors and return empty objects', () => {
      // Mock fs.readFileSync to throw an error
      fs.readFileSync.mockImplementation(() => {
        throw new Error('File not found');
      });
      
      // Mock console.error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // Call the function
      const result = parseFrontMatter('nonexistent.md');
      
      // Assertions
      expect(result).toEqual({
        frontMatter: {},
        content: ''
      });
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error parsing front matter from nonexistent.md:'),
        expect.any(Error)
      );
      
      // Restore console.error
      consoleSpy.mockRestore();
    });
  });
  
  describe('mapJekyllLayoutToNextComponent', () => {
    it('should map Jekyll layouts to Next.js components correctly', () => {
      expect(mapJekyllLayoutToNextComponent('default')).toBe('Layout');
      expect(mapJekyllLayoutToNextComponent('page')).toBe('PageLayout');
      expect(mapJekyllLayoutToNextComponent('post')).toBe('PostLayout');
      expect(mapJekyllLayoutToNextComponent('solutions')).toBe('SolutionsLayout');
      expect(mapJekyllLayoutToNextComponent('markdown')).toBe('MarkdownLayout');
    });
    
    it('should return default Layout for unknown layouts', () => {
      expect(mapJekyllLayoutToNextComponent('unknown')).toBe('Layout');
      expect(mapJekyllLayoutToNextComponent(undefined)).toBe('Layout');
      expect(mapJekyllLayoutToNextComponent(null)).toBe('Layout');
    });
  });
  
  describe('migrateJekyllFiles', () => {
    beforeEach(() => {
      // Reset and setup mocks for this test suite
      jest.clearAllMocks();

      fs.readdirSync.mockReturnValue(['file1.md', 'file2.md', 'subdir']);
      fs.statSync.mockImplementation((filePath) => ({
        isDirectory: () => filePath.includes('subdir')
      }));
      fs.existsSync.mockReturnValue(false);
      fs.mkdirSync.mockImplementation(() => {});
      fs.writeFileSync.mockImplementation(() => {});

      path.join.mockImplementation((...args) => args.join('/'));
      
      // Configure our mock implementation of parseFrontMatter
      mockParseFrontMatter.mockImplementation((filePath) => ({
        frontMatter: { 
          title: `Title for ${filePath}`, 
          layout: 'default' 
        },
        content: `Content for ${filePath}`
      }));
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it('should process markdown files and write Next.js files', () => {
      // Call the function
      migrateJekyllFiles('source', 'target', 'md');
      
      // Check that files were processed
      expect(fs.readdirSync).toHaveBeenCalledWith('source');
      expect(fs.statSync).toHaveBeenCalledTimes(3); // For each file/dir
      
      // Check file writing
      expect(fs.writeFileSync).toHaveBeenCalledTimes(2); // For each markdown file
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        'target/file1.js',
        expect.stringContaining('import Layout from')
      );
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        'target/file2.js',
        expect.stringContaining('import Layout from')
      );
      
      // Verify the recursive call for subdirectory
      expect(fs.mkdirSync).toHaveBeenCalledWith('target/subdir', { recursive: true });
    });
    
    it('should handle errors during migration', () => {
      // Mock readdirSync to throw an error for the error case test
      fs.readdirSync.mockImplementationOnce(() => {
        throw new Error('Directory not found');
      });
      
      // Mock console.error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // Call the function
      migrateJekyllFiles('nonexistent', 'target');
      
      // Check that error was handled
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error migrating Jekyll files:',
        expect.any(Error)
      );
      
      // Restore console.error
      consoleSpy.mockRestore();
    });
  });
});
