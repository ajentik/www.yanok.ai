import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Miestro"
      description="Miestro is a membership platform for online education courses, where you can create powerful courses with free or payable plans."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/miestro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Miestro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 79, 101, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Miestro is a membership platform for online education courses, where you can create powerful courses with free or payable plans.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Course Completion</div>
  <div>Triggers when a user completes a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Signup</div>
  <div>Triggers when a member signs up for a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Plans</div>
  <div>Get Course Plans.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Owner</div>
  <div>Create new owner in miestro.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Member</div>
  <div>Enroll member to course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a new member.</div>
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
          <title>Miestro</title>
          <meta name="description" content="Miestro is a membership platform for online education courses, where you can create powerful courses with free or payable plans." />
        </>
      ),
    },
  };
}
