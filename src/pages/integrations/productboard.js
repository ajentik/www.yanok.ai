import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Productboard"
      description="Productboard is beautiful, simple, and powerful product management. Product leaders can easily centralize user and market research, capture and organize feature ideas, prioritize against clear strategic objectives and keep everyone on the same page thanks to delightful, interactive roadmaps."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/productboard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Productboard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(19, 155, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Productboard is beautiful, simple, and powerful product management. Product leaders can easily centralize user and market research, capture and organize feature ideas, prioritize against clear strategic objectives and keep everyone on the same page thanks to delightful, interactive roadmaps.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Feature</div>
  <div>Triggers when a new feature is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Feature</div>
  <div>Creates a new feature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note.</div>
</div>

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
          <title>Productboard</title>
          <meta name="description" content="Productboard is beautiful, simple, and powerful product management. Product leaders can easily centralize user and market research, capture and organize feature ideas, prioritize against clear strategic objectives and keep everyone on the same page thanks to delightful, interactive roadmaps." />
        </>
      ),
    },
  };
}
