import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="About Yanok AI - Get To Know and Yanok Global Team"
      description="Yanok is on a mission to empower businesses with streamlined processes and on-time insights to outperform competition."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
  <!-- Header Section -->
  <div class="pt-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 class="font-regular text-5xl md:text-7xl mb-8 text-white">About Yanok</h1>
      <p class="text-2xl max-w-3xl mx-auto text-gray-300">
          Yanok is on a mission to empower SMEs with agentic AI-powered processes and API orchestration to max out existing IT landscape potential.
      </p>
  </div>

  <!-- Main Content -->
  <div class="w-full text-white">
      <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div class="text-lg space-y-16">
              <!-- The Problem Section -->
              <div class="bg-gray-800/50 rounded-xl p-8">
                  <h2 class="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
                  <p class="text-2xl text-gray-300">
                      Managing a business today can feel like juggling too many apps, with a heap of AI tools adding to the complexity. SMEs face:
                  </p>
                  <ul class="mt-6 space-y-4 text-gray-300">
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Overwhelming number of disconnected software solutions
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Difficulty in integrating AI into existing workflows
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Time-consuming manual processes and data entry
                      </li>
                  </ul>
              </div>

              <!-- The Mission Section -->
              <div class="bg-gray-800/50 rounded-xl p-8">
                  <h2 class="text-4xl md:text-5xl font-bold mb-6">The Mission</h2>
                  <p class="text-2xl text-gray-300">
                      Our mission is to harness the power of AI to empower SMEs and professionals by:
                  </p>
                  <ul class="mt-6 space-y-4 text-gray-300">
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Simplifying complex business processes through intelligent automation
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Creating seamless integrations between existing tools and systems
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Delivering practical AI solutions that drive real business value
                      </li>
                  </ul>
              </div>

              <!-- The Vision Section -->
              <div class="bg-gray-800/50 rounded-xl p-8">
                  <h2 class="text-4xl md:text-5xl font-bold mb-6">The Vision</h2>
                  <p class="text-2xl text-gray-300">
                      Our ultimate vision is to consistently improve how businesses operate and evolve with the market through:
                  </p>
                  <ul class="mt-6 space-y-4 text-gray-300">
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Creating an ecosystem where AI enhances human capabilities
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Building sustainable and scalable solutions for future growth
                      </li>
                      <li class="flex items-start">
                          <span class="text-blue-500 mr-2">•</span>
                          Empowering businesses to stay competitive in a digital world
                      </li>
                  </ul>
              </div>

              <!-- Our Values Section -->
              <div class="bg-gray-800/50 rounded-xl p-8">
                  <h2 class="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div class="space-y-6">
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Integrity</h3>
                              <p class="text-gray-300">Upholding trust, respect, and transparency in all actions, ensuring ethical AI development and deployment.</p>
                          </div>
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Innovation</h3>
                              <p class="text-gray-300">Continuously exploring new technologies and creative solutions while maintaining practical applicability.</p>
                          </div>
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">User Experience</h3>
                              <p class="text-gray-300">Building intuitive and practical products that enhance rather than complicate workflows.</p>
                          </div>
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Customer-Centricity</h3>
                              <p class="text-gray-300">Prioritizing the needs and insights of our customers in every development decision.</p>
                          </div>
                      </div>
                      <div class="space-y-6">
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Inclusivity</h3>
                              <p class="text-gray-300">Fostering a diverse and respectful environment that welcomes all perspectives and ideas.</p>
                          </div>
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Collaboration</h3>
                              <p class="text-gray-300">Promoting effective and sustainable teamwork across organizations and departments.</p>
                          </div>
                          <div>
                              <h3 class="text-2xl font-semibold text-blue-400">Continuous Learning</h3>
                              <p class="text-gray-300">Encouraging ongoing knowledge-sharing and development to stay ahead of industry trends.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>About Yanok AI - Get To Know and Yanok Global Team</title>
          <meta name="description" content="Yanok is on a mission to empower businesses with streamlined processes and on-time insights to outperform competition." />
        </>
      ),
    },
  };
}
