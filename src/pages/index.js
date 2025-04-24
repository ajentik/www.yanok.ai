import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Yanok Agentic Workflow for Business"
      description="Build and run agentic workflows, turn the best practices into yes-no-ok decision for experts"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="site-gutter max-w-container mx-auto md:py-24 md:px-24 px-10 py-10">
  <style>
    #cycle {
      border-right: .15em solid;
      padding: 0.5rem;
      font-family: \'Kanit\', monospace; /* Fallback to monospace if Kanit isn\'t available */
      white-space: nowrap;
      overflow: hidden;
    }

    .hero-badge {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      display: inline-flex;
      align-items: center;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .gradient-text {
      background: linear-gradient(to right, #4ade80, #22d3ee);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .feature-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .feature-icon {
      background: linear-gradient(to bottom right, #4ade80, #22d3ee);
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .steps-container {
      position: relative;
    }

    .steps-container::before {
      content: \'\';
      position: absolute;
      left: 24px;
      top: 40px;
      bottom: 40px;
      width: 2px;
      background: rgba(255, 255, 255, 0.2);
      z-index: 0;
    }

    .step-number {
      background: linear-gradient(to bottom right, #4ade80, #22d3ee);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      z-index: 1;
      position: relative;
    }
  </style>

  <div class="flex flex-col gap-10">
    <div class="text-center">
      <div class="hero-badge">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
        </svg>
        <span>Intelligent Workflows for Modern Business</span>
      </div>
      <h1 class="font-bold text-5xl md:text-7xl mb-6">Augment business with <span class="gradient-text">AI</span></h1>
      <p class="font-regular text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">Transform your business operations with our agentic workflows that automate complex processes and enhance decision-making</p>
      <p class="font-regular text-2xl md:text-3xl pt-2 pb-8"><span class="inline md:hidden">&nbsp;<br /></span>Next &mdash; Agentic &mdash; <span id="cycle" class="text-yellow-300"></span></p>
      
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <a href="/book-demo.html" class="btn btn-cta px-8 py-3 text-lg">Book an intro</a>
        <a href="/platform.html" class="px-8 py-3 text-lg border border-white/30 rounded hover:bg-white/10 transition">Explore Platform</a>
      </div>
    </div>
  </div>

  <script>
    const words = ["Updated Record", "Resolved Ticket", "Email Draft", "Content Update", "Status Report"];
    let currentWordIndex = 0;
    let currentCharIndex = 0; 
    let isDeleting = false;
    const typingSpeedMs = 100; 
    const deletingSpeedMs = 50; 
    const delayBetweenWordsMs = 2000; 
    const cycleElement = document.getElementById("cycle");
  
    function typeWord() {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        currentCharIndex--;
      } else {
        currentCharIndex++;
      }
      
      cycleElement.textContent = currentWord.slice(0, currentCharIndex);
  
      if (!isDeleting && currentCharIndex == currentWord.length) {
        // Pause at the end of a word before deleting
        setTimeout(() => { isDeleting = true; }, delayBetweenWordsMs);
      } else if (isDeleting && currentCharIndex == 0) {
        // Move to the next word
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeedMs); // Immediate typing after deleting
        return;
      }
  
      const delay = isDeleting ? deletingSpeedMs : typingSpeedMs;
      setTimeout(typeWord, delay);
    }
    
    // Start the typing effect
    typeWord();
  </script>
</div>

<div class="w-full py-16">
  <div class="md:py-16 md:px-24 px-10 py-10 flex flex-col gap-16 max-w-container mx-auto">
    <h2 class="text-4xl md:text-5xl text-center font-bold">How It <span class="text-yellow-300">Works</span></h2>
    
    <div class="steps-container md:px-16 space-y-12">
      <div class="flex gap-4">
        <div class="step-number">1</div>
        <div class="flex-1">
          <h3 class="text-2xl font-semibold mb-2">Connect Your Systems</h3>
          <p class="text-gray-300">Integrate with your existing tools and data sources through our extensive API connections and custom integrations.</p>
        </div>
      </div>
      
      <div class="flex gap-4">
        <div class="step-number">2</div>
        <div class="flex-1">
          <h3 class="text-2xl font-semibold mb-2">Build Agentic Workflows</h3>
          <p class="text-gray-300">Design intelligent workflows that can make decisions, process data, and take actions across your connected systems.</p>
        </div>
      </div>
      
      <div class="flex gap-4">
        <div class="step-number">3</div>
        <div class="flex-1">
          <h3 class="text-2xl font-semibold mb-2">Deploy & Scale</h3>
          <p class="text-gray-300">Easily deploy your workflows and scale them as your business grows, maintaining full control and visibility.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="w-full">
  <div class="md:py-16 md:px-24 px-10 py-10 flex flex-col gap-16 max-w-container mx-auto">
    <h2 class="text-4xl md:text-5xl text-center font-bold">Combine multiple systems into <span class="text-yellow-300">one agentic process</span></h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Expert Process Automation</h4>
        <p class="text-gray-300">Transform complex expert workflows into automated processes that maintain the same quality while increasing efficiency.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Best Practice Scaling</h4>
        <p class="text-gray-300">Scale your best practices across the organization with AI-powered workflows that adapt to changing market needs.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H2a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H2a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Bespoke Solutions</h4>
        <p class="text-gray-300">Leverage our model and language-independent architecture to create workflows tailored to your specific business needs.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Human in the Loop</h4>
        <p class="text-gray-300">Combine AI efficiency with human oversight through streamlined workflows that ensure responsible use and optimal outcomes.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Privacy of Data</h4>
        <p class="text-gray-300">Protect your sensitive information with our proactive data protection framework and comprehensive security measures.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h4 class="text-xl font-semibold mb-2">Performance Analytics</h4>
        <p class="text-gray-300">Gain valuable insights into your workflows with comprehensive analytics and reporting tools.</p>
      </div>
    </div>
  </div>
</div>

<div class="w-full text-black bg-white duration-1000 py-16">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-10 md:px-24 px-10">
    <h2 class="text-4xl md:text-5xl text-center font-bold">Trusted by <span class="gradient-text">Leading Companies</span></h2>
    <p class="text-xl text-center text-gray-600 max-w-3xl">Join the growing network of businesses transforming their operations with Yanok\'s agentic workflow solutions</p>
    <img data-intersection-once="fadeIn" src="/images/partners.webp" class="my-8" alt="Partner companies" />
    
    <div class="grid md:grid-cols-3 gap-8 w-full mt-8">
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
        <div class="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-gray-700 italic">"Yanok\'s agentic workflows have transformed how we handle customer support tickets, reducing resolution time by 68%."</p>
        <div class="mt-4">
          <p class="font-semibold">Sarah Johnson</p>
          <p class="text-sm text-gray-600">CTO, TechConnect</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
        <div class="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-gray-700 italic">"We\'ve integrated Yanok with our existing systems and saw immediate improvements in our workflow efficiency across departments."</p>
        <div class="mt-4">
          <p class="font-semibold">Michael Chen</p>
          <p class="text-sm text-gray-600">Operations Director, GlobalTech</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
        <div class="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="text-gray-700 italic">"The human-in-the-loop approach gives us confidence that AI is enhancing our team\'s capabilities rather than replacing them."</p>
        <div class="mt-4">
          <p class="font-semibold">Emily Rodriguez</p>
          <p class="text-sm text-gray-600">HR Director, Innovative Solutions</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-10 md:py-24 md:px-24 px-10 py-16">
  <div class="w-full max-w-4xl bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
    <h2 class="text-4xl md:text-5xl text-center font-bold mb-8">Ready to run <span class="text-yellow-300">Agentic-Powered</span> Business?</h2>
    <p class="text-xl md:text-2xl text-center mb-10 max-w-2xl mx-auto">Start your journey to more efficient, intelligent workflow automation today. Our team is ready to guide you through implementation.</p>
    <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
      <a href="/book-demo.html" class="btn btn-cta text-xl md:text-2xl rounded-lg bg-gradient-to-br md:px-10 md:py-4 from-teal to-blue flex items-center">
        <span>Book an intro</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
      <p class="text-lg md:text-xl opacity-80">or</p>
      <a href="/platform.html" class="text-xl md:text-2xl hover:underline flex items-center">
        <span>Explore the platform</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</div>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTitle: "Yanok Agentic Workflow for Business",
      metaDescription: "Build and run agentic workflows, turn the best practices into yes-no-ok decision for experts"
    },
  };
}
