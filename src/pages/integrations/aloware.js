import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Aloware"
      description="Aloware is a Cloud-based contact center software that offers call, text, and workflow automation and is fit for any team."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aloware.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Aloware Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 191, 74, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aloware is a Cloud-based contact center software that offers call, text, and workflow automation and is fit for any team.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Disposed</div>
  <div>Triggers when a call is disposed in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Communication Disposed</div>
  <div>Triggers when a communication is disposed in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Communication Initiated</div>
  <div>Triggers when a communication is initiated in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Disposed</div>
  <div>Triggers when a contact\'s disposition status has changed in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Saved</div>
  <div>Triggers when a voicemail is saved in Aloware.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Voicemail Saved</div>
  <div>Triggers when a voicemail is saved in Aloware.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates/Updates a contact on your Aloware account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Contact to Sequence</div>
  <div>Enrolls a contact to a sequence on your Aloware account. For more information, go to Aloware &gt;&gt; Integrations &gt;&gt; Sequences API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Establish Two-Legged Call</div>
  <div>Establish a two-legged call with your Aloware account. For more information, go to Aloware &gt;&gt; Integrations &gt;&gt; Two-Legged Call API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Number Lookup</div>
  <div>Search for the number\'s information with your Aloware account. For more information, go to Aloware &gt;&gt; Integrations &gt;&gt; Number Lookup API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send RVM</div>
  <div>Send an RVM with your Aloware account. For more information, go to Aloware &gt;&gt; Integrations &gt;&gt; RVM API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send an SMS with your Aloware account.</div>
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
          <title>Aloware</title>
          <meta name="description" content="Aloware is a Cloud-based contact center software that offers call, text, and workflow automation and is fit for any team." />
        </>
      ),
    },
  };
}
