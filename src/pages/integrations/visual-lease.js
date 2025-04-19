import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Visual Lease"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/visual-lease.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Visual Lease Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 67, 155, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Visual Lease is a comprehensive, powerful and easy-to-use real estate and lease management software solution that makes it easy to know what your leases say, how much they cost, and when they need attention. It enables companies to control, report, track, and manage owned and leased real estate and make better decisions on leases and related information.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Alert Notification</div>
  <div>Triggers when there are one or more alerts for notification. Alerts processing is done on a daily basis and if there are alerts for the day, they will be sent as individual messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Alert Notification Combined</div>
  <div>Triggers when there are one or more alerts for notification. Alerts processing is done on a daily basis and if there are alerts for the day, they will be aggregated and sent as a single message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change of Lease Status</div>
  <div>Triggers when lease status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lease</div>
  <div>Triggers when a new lease is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lease Document</div>
  <div>A new lease document is created in Visual Lease.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Document</div>
  <div>A new project document is created in Visual Lease.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change of Project Status</div>
  <div>Triggers when project status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change of Project Task Status</div>
  <div>Triggers when project task status is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Lease Document</div>
  <div>Creates a new document in a Lease. File name must contain Lease name somewhere in it\'s name, so that the document can be correctly matched to a Lease.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Lease Note</div>
  <div>Creates a new note in a lease.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Project Document</div>
  <div>Creates a new document in a Project . File name must contain Project Name somewhere in it\'s name, so that the document can be correctly matched to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Project Note</div>
  <div>Creates a new note in a project.</div>
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
          <title>Visual Lease</title>
        </>
      ),
    },
  };
}
