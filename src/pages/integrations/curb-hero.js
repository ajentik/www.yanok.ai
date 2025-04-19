import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Curb Hero"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/curb-hero.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Curb Hero Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 41, 79, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Curb Hero (formerly Block Party) is a simple, yet powerful, digital Open House sign-in app + property marketing tool used by thousands of real estate agents and mortgage professionals. It\'s proven to save time and get better quality lead data. Using Curb Hero subscription-free app, Realtors can quickly create a digital open house sign-in that is a showcase for their brand. Their logo, photos, color palette, lead questions, and follow-up messaging are all customizable. Curb Hero\'s Zapier integration can be used to unlock infinite possibilities with the data collected at open houses or in property marketing!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added in Curb Hero</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Curb Hero</title>
        </>
      ),
    },
  };
}
