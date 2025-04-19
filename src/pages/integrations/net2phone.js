import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="net2phone"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/net2phone.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        net2phone Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 149, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">net2phone is a leading provider of cloud-based business phone systems and unified communications tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Missed</div>
  <div>Triggers when a call is missed. (Gen V, Gen X, Gen U)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Ringing</div>
  <div>Triggers when the subscribed user extension is ringing. (Gen P, Gen V, Gen X, Gen U)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Busy</div>
  <div>Triggers when there is a busy line. (Gen V, Gen X, Gen U)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Completed</div>
  <div>Triggers when a call is completed. (Gen P, Gen V, Gen X, Gen U)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Answered</div>
  <div>Triggers when a call was answered. (Gen P, Gen V, Gen X, Gen U)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Notification (Gen X and U Only)</div>
  <div>Triggers when the user receives an incoming text message. Note: it won\'t work for internal (Gen X or U user → Gen X or U user) messages.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Huddle Meeting</div>
  <div>Creates a huddle meeting. (Gen P, Gen V, Gen X, Gen U) You need to add one more action in order to receive the huddle meeting information. Ex. an email with the information or a SMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS (Gen X and U Only)</div>
  <div>Sends a SMS to a phone number (Gen X and U only). This will only work with the authenticated user’s phone number.</div>
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
          <title>net2phone</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
