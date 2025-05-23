import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Careers at Yanok"
      description="Join our mission to empower businesses with AI-driven solutions. Explore exciting career opportunities at Yanok."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Header Section -->
    <div class="pt-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 class="font-regular text-5xl md:text-7xl mb-8 text-white">Careers at Yanok</h1>
        <p class="text-2xl max-w-3xl mx-auto text-gray-300 mb-16">
            Join us in transforming how businesses operate through innovative AI solutions.
        </p>
    </div>

    <!-- Open Positions -->
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-white">Open Positions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Position Cards -->
            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Prompt Engineer</h3>
                <p class="text-gray-300 mb-4">Full-time hybrid • Singapore</p>
                <p class="text-gray-300">This is a full-time hybrid role for a Prompt Engineer, located in Singapore with flexibility for some remote work. The Prompt Engineer will be responsible for designing, building, testing, and maintaining the prompt models for Yanok Business AI Platform.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Marketing Content Manager</h3>
                <p class="text-gray-300 mb-4">Full-time • Flexible Location</p>
                <p class="text-gray-300">We are looking for a talented and experienced Marketing Content Manager to join our dynamic team. As a key member of our marketing effort, you will be responsible for creating compelling and engaging content across various platforms.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Senior Software Engineer</h3>
                <p class="text-gray-300 mb-4">Full-time • Hybrid</p>
                <p class="text-gray-300">As our Senior Full-stack Engineer, your mission will be to develop and perfect the essential parts and functionalities of the Yanok Platform. Your expertise will forge stronger connections between companies and freelancers.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">B2B UX Designer</h3>
                <p class="text-gray-300 mb-4">Full-time • Remote</p>
                <p class="text-gray-300">Join us as a B2B UX Designer to create intuitive and efficient user experiences for our enterprise solutions. You\'ll work closely with our product team to design interfaces that make complex business processes simple and enjoyable.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">AI Solutions Architect</h3>
                <p class="text-gray-300 mb-4">Full-time • Hybrid</p>
                <p class="text-gray-300">We\'re seeking an experienced AI Solutions Architect to design and implement sophisticated AI systems. You\'ll be responsible for architecting scalable AI solutions that meet our clients\' business needs and drive innovation.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Product Analytics Lead</h3>
                <p class="text-gray-300 mb-4">Full-time • Remote</p>
                <p class="text-gray-300">As our Product Analytics Lead, you\'ll drive data-informed decision making across our product development lifecycle. You\'ll work with cross-functional teams to derive actionable insights and shape our product strategy.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Project Manager</h3>
                <p class="text-gray-300 mb-4">Full-time • Hybrid</p>
                <p class="text-gray-300">We\'re looking for a skilled Project Manager to lead complex AI implementation projects. You\'ll coordinate cross-functional teams, manage project timelines, and ensure successful delivery of our solutions to enterprise clients.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">Technical Content Writer</h3>
                <p class="text-gray-300 mb-4">Full-time • Remote</p>
                <p class="text-gray-300">Join us as a Technical Content Writer to create clear, comprehensive documentation and guides for our AI platform. You\'ll translate complex technical concepts into accessible content for both technical and non-technical audiences.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">B2B Marketing Manager</h3>
                <p class="text-gray-300 mb-4">Full-time • Flexible Location</p>
                <p class="text-gray-300">We\'re seeking a B2B Marketing Manager to develop and execute marketing strategies for our enterprise solutions. You\'ll drive lead generation, create compelling campaigns, and work closely with sales to accelerate business growth.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-4">QA Engineer</h3>
                <p class="text-gray-300 mb-4">Full-time • Hybrid</p>
                <p class="text-gray-300">As our QA Engineer, you\'ll ensure the quality and reliability of our AI platform. You\'ll develop and execute test strategies, automate testing processes, and work closely with development teams to maintain high product standards.</p>
            </div>

            <div class="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
              <h3 class="text-2xl font-semibold text-blue-400 mb-4">Customer Success Manager</h3>
                <p class="text-gray-300 mb-4">Full-time • Hybrid</p>
                <p class="text-gray-300">We\'re looking for a Customer Success Manager to ensure our enterprise clients achieve maximum value from our AI solutions. You\'ll build strong client relationships, drive product adoption, and contribute to customer satisfaction and retention.</p>
            </div>
        </div>

        <!-- Benefits Section -->
        <div class="mt-24">
            <h2 class="text-4xl font-bold text-white mb-12">Why Join Yanok?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-800/50 rounded-xl p-8">
                    <h3 class="text-2xl font-semibold text-blue-400 mb-4">Innovation First</h3>
                    <p class="text-gray-300">Work with cutting-edge AI technology and shape the future of business operations.</p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-8">
                    <h3 class="text-2xl font-semibold text-blue-400 mb-4">Growth & Learning</h3>
                    <p class="text-gray-300">Continuous learning opportunities and career development paths.</p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-8">
                    <h3 class="text-2xl font-semibold text-blue-400 mb-4">Global Impact</h3>
                    <p class="text-gray-300">Make a real difference in how businesses worldwide operate and succeed.</p>
                </div>
            </div>
        </div>

        <!-- Open Application Section -->
        <div class="mt-16 text-center bg-gray-800/50 rounded-xl p-8">
            <h3 class="text-2xl font-semibold text-blue-400 mb-4">Don\'t see your perfect role?</h3>
            <p class="text-xl text-gray-300 mb-6">You don\'t want to "box yourself" into a "role"? We\'re always looking for exceptional talent.</p>
            <a href="mailto:apply@yanok.ai" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Drop us a line at apply@yanok.ai
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
      metaTags: (
        <>
          <title>Careers at Yanok</title>
          <meta name="description" content="Join our mission to empower businesses with AI-driven solutions. Explore exciting career opportunities at Yanok." />
        </>
      ),
    },
  };
}
