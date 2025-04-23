import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Ceipal"
      description={`Ceipal talent hire creating interview scheduling and creating sample note only for ceipal users.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ceipal.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Ceipal Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ceipal talent hire creating interview scheduling and creating sample note only for ceipal users.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Applicant</div>
  <div>Triggers when a new Applicant is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Contact</div>
  <div>Triggers when a new client contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Interview</div>
  <div>Triggers when a new Interview is created to Ceipal Talent hire.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job_Postings</div>
  <div>Triggers when a new Job_Postings is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Joinings</div>
  <div>Triggers when a new Joinings is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created in the Talenthire application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Placements</div>
  <div>Triggers when a new Placements is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submissions</div>
  <div>Triggers when a new Submissions is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a Company</div>
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
          <title>Ceipal</title>
          <meta name="description" content={`Ceipal talent hire creating interview scheduling and creating sample note only for ceipal users.`} />
        </>
      ),
    },
  };
}
