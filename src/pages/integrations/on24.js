import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ON24"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/on24.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ON24 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(88, 164, 219, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ON24 is a webinar-based marketing platform that drives demand generation and customer engagement.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers when there is a new attendee to the specified webcast or client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webcast</div>
  <div>Triggers when a new Webcast is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Attendee</div>
  <div>Triggers when there is a new attendee or when the attendee has a new activity. This trigger can work for a specific webcast or an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Presenter</div>
  <div>Triggers when there is a new presenter in any of the webcasts belonging to the associated client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Question</div>
  <div>Triggers when a new question is asked at account level. If Webcast ID is specified, then the trigger will work at Webcast level.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registrant</div>
  <div>Triggers when there is a new registrant to the specified webcast. If no specific webcast is selected, the trigger will work at Client level.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Copy Webcast</div>
  <div>Copies a Webcast from an existent one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Webcast</div>
  <div>Creates a new webcast.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Registrant</div>
  <div>Creates a new Registrant for a particular Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Webcast</div>
  <div>Update an existing webCast.</div>
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
          <title>ON24</title>
        </>
      ),
    },
  };
}
