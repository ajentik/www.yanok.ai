import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Partner Network - Enterprise AI Solutions | Yanok Platform"
      description="Join Yanok's partner ecosystem to deliver cutting-edge AI solutions. Transform businesses through our comprehensive partnership programs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Partner Ecosystem
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16">
            Join forces with us to democratize AI for SMEs, enabling businesses 
            to harness the power of artificial intelligence at scale.
        </p>
    </div>

    <!-- Value Proposition Section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h2 class="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
                Why Partner with Yanok
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-800/50 rounded-xl p-6 text-center">
                    <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">Market Leadership</h3>
                    <p class="text-gray-300">
                        Access cutting-edge AI technology
                    </p>
                </div>
                <div class="text-center">
                    <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">Revenue Growth</h3>
                    <p class="text-gray-300">
                        Unlock new revenue streams through AI implementation and 
                        consulting services.
                    </p>
                </div>
                <div class="text-center">
                    <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">Expert Support</h3>
                    <p class="text-gray-300">
                        Benefit from comprehensive technical support and continuous 
                        knowledge transfer.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Partnership Tiers -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-semibold text-white text-center mb-24 mt-24">
            Partnership Programs
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Strategic Partner -->
            <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
                <h3 class="text-2xl font-bold text-white mb-4">Strategic Partner</h3>
                <p class="text-gray-300 mb-6">
                    Shape the future of enterprise AI through deep collaboration and 
                    strategic alignment with Yanok\'s vision.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Early access to breakthrough AI capabilities and beta features
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Direct influence on product roadmap and strategic initiatives
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Co-marketing opportunities and executive sponsorship
                        </span>
                    </li>
                </ul>
            </div>

            <!-- Implementation Partner -->
            <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
                <h3 class="text-2xl font-bold text-white mb-4">Implementation Partner</h3>
                <p class="text-gray-300 mb-6">
                    Deploy and integrate Yanok\'s AI solutions with expertise and 
                    technical excellence.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Comprehensive technical training and certification programs
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Access to implementation frameworks and best practices
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Priority support channels and implementation resources
                        </span>
                    </li>
                </ul>
            </div>

            <!-- Solution Partner -->
            <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
                <h3 class="text-2xl font-bold text-white mb-4">Solution Partner</h3>
                <p class="text-gray-300 mb-6">
                    Build and deliver industry-specific AI solutions powered by Yanok\'s 
                    enterprise platform.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Full access to APIs and development tools
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Joint solution development and go-to-market support
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Solution marketplace listing and revenue sharing opportunities
                        </span>
                    </li>
                </ul>
            </div>

            <!-- Consulting Partner -->
            <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
                <h3 class="text-2xl font-bold text-white mb-4">Consulting Partner</h3>
                <p class="text-gray-300 mb-6">
                    Guide organizations through their AI transformation journey with 
                    strategic expertise.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Extensive consulting methodology and frameworks
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Industry-specific use case playbooks and ROI models
                        </span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-blue-400 mr-3">•</span>
                        <span class="text-gray-300">
                            Access to customer success stories and reference architectures
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Partner Benefits Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 class="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
            Partner Benefits
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-800/50 rounded-xl p-6 text-center">
                <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Training & Enablement</h3>
                <p class="text-gray-300">
                    Access comprehensive training resources and certification programs
                </p>
            </div>
            <div class="bg-gray-800/50 rounded-xl p-6 text-center">
                <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Technical Support</h3>
                <p class="text-gray-300">
                    Dedicated support channels and implementation assistance
                </p>
            </div>
            <div class="text-center">
                <div class="bg-blue-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Marketing Support</h3>
                <p class="text-gray-300">
                    Co-marketing initiatives and lead generation programs
                </p>
            </div>
    </div>

    <!-- Success Stories 
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 class="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
            Partner Success Stories
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-800 rounded-xl p-8">
                <div class="flex items-center mb-6">
                    <img src="/images/partner-logo-1.png" alt="Partner Logo" class="h-12 w-auto mr-4">
                    <div>
                        <h3 class="text-xl font-semibold text-white">Soloway Tech</h3>
                        <p class="text-gray-400">Strategic Partner</p>
                    </div>
                </div>
                <blockquote class="text-gray-300">
                    "Partnering with Yanok has transformed our ability to deliver 
                    cutting-edge AI solutions. The platform\'s capabilities and 
                    support have been instrumental in our recent market expansion."
                </blockquote>
                <p class="text-gray-400 mt-4">- Vitaliy Rodymiuk, CEO</p>
            </div>

            <div class="bg-gray-800 rounded-xl p-8">
                <div class="flex items-center mb-6">
                    <img src="/images/partner-logo-2.png" alt="Partner Logo" class="h-12 w-auto mr-4">
                    <div>
                        <h3 class="text-xl font-semibold text-white">DataFirst Consulting</h3>
                        <p class="text-gray-400">Implementation Partner</p>
                    </div>
                </div>
                <blockquote class="text-gray-300">
                    "The comprehensive training and support from Yanok enabled us to 
                    rapidly scale our AI implementation practice and deliver 
                    exceptional results for our clients."
                </blockquote>
                <p class="text-gray-400 mt-4">- Marcus Rodriguez, CTO</p>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
            Join our partner network and help shape the future of enterprise AI
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a 
                href="mailto:partners@yanok.ai" 
                class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150">
                Apply Now
            </a>
            <a 
                href="mailto:sales@yanok.ai" 
                class="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 transition duration-150">
                Contact Sales
            </a>
        </div>
    </div>

    <!-- Footer Note -->
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <p class="text-gray-400 text-sm">
            Yanok is committed to building lasting partnerships that drive innovation 
            and create value for businesses worldwide. Our partner program is 
            designed to support your growth and success.
        </p>
    </div>
</div>

<!-- Partner Application Modal -->
<div id="partnerModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50">
    <div class="flex items-center justify-center min-h-screen px-4">
        <div class="bg-gray-800 rounded-xl max-w-md w-full p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Partner Application</h3>
            <form action="/api/partner-application" method="POST" class="space-y-6">
                <div>
                    <label for="company" class="block text-sm font-medium text-gray-300">
                        Company Name
                    </label>
                    <input 
                        type="text" 
                        name="company" 
                        id="company" 
                        class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                        required>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">
                        Business Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                        required>
                </div>
                <div>
                    <label for="partnership" class="block text-sm font-medium text-gray-300">
                        Partnership Type
                    </label>
                    <select 
                        name="partnership" 
                        id="partnership" 
                        class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white">
                        <option value="strategic">Strategic Partner</option>
                        <option value="implementation">Implementation Partner</option>
                        <option value="solution">Solution Partner</option>
                        <option value="consulting">Consulting Partner</option>
                    </select>
                </div>
                <div class="flex justify-end gap-4">
                    <button 
                        type="button"
                        onclick="closeModal()"
                        class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    function openModal() {
        document.getElementById(\'partnerModal\').classList.remove(\'hidden\');
    }

    function closeModal() {
        document.getElementById(\'partnerModal\').classList.add(\'hidden\');
    }
</script>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Partner Network - Enterprise AI Solutions | Yanok Platform</title>
          <meta name="description" content="Join Yanok's partner ecosystem to deliver cutting-edge AI solutions. Transform businesses through our comprehensive partnership programs." />
        </>
      ),
    },
  };
}
