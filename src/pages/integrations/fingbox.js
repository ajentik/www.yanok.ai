import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Fingbox"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/fingbox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Fingbox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 154, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Fingbox is network detection technology that plugs into your WiFi router to alert you of network threats, identify poor connectivity, control screentime, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Device Is Off</div>
  <div>This trigger fires when a device is detected OFF (offline) in your network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Device Is On</div>
  <div>This trigger fires when a device is detected ON in your network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A Fingbox Goes Offline</div>
  <div>This trigger fires when a fingbox get disconnected from the network. This is usually an indication that the network connectivity is not working.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A Fingbox Is Back Online</div>
  <div>This trigger fires when a fingbox get re-connected to the network. This is usually an indication that the network connectivity came back online.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Internet Speed Dropped</div>
  <div>This trigger fires when an Internet speed drop or slow down is detected, on download or upload channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Device Found</div>
  <div>This trigger fires when a new device is detected in your network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Everyone Left</div>
  <div>This trigger fires when no one of a user group is detected in or nearby your network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Someone Arrived</div>
  <div>This trigger fires when someone of a user group is detected in or nearby your network.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A User Left</div>
  <div>This trigger fires when a user is no more detected nearby.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A User Arrived</div>
  <div>This trigger fires when a user is detected in or nearby your network.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Play LED Effect</div>
  <div>This action will play a light effect on Fingbox LED.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Internet Access</div>
  <div>Suspend the access to internet for a given user or category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Turn on Internet Access</div>
  <div>Resume the access to internet for a given user or category.</div>
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
          <title>Fingbox</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
