import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Aurelius"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aurelius.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Aurelius Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 63, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aurelius is a user research and insights platform to tag, analyze, search and share all your UX research in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Cross Project Insight</div>
  <div>Cross Project Insight</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Cross Project Recommendation</div>
  <div>Cross Project Recommendation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Insight</div>
  <div>Triggers when an Insight is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Recommendation</div>
  <div>Triggers when a new recommendation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cross Project Insight</div>
  <div>Cross Project Insight</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cross Project Recommendation</div>
  <div>Cross Project Recommendation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Insight</div>
  <div>Triggers when a new Insight is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recommendation</div>
  <div>Triggers when a new recommendation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Cross Project Insight</div>
  <div>Cross Project Insight</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Cross Project Recommendation</div>
  <div>Cross Project Recommendation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Insight</div>
  <div>Triggers when an Insight is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Recommendation</div>
  <div>Triggers when a new recommendation is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Notes</div>
  <div>Creates a new Notes</div>
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
          <title>Aurelius</title>
        </>
      ),
    },
  };
}
