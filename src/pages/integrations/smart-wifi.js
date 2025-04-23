import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Smart WiFi"
      description={`Smart WiFi is a marketing CRM which helps HoReCa clients build a database of their guests and interact with them via marketing widgets.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smart-wifi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Smart WiFi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(162, 39, 113, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Smart WiFi is a marketing CRM which helps HoReCa clients build a database of their guests and interact with them via marketing widgets.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Birthdays</div>
  <div>Triggers when get new birthday</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feedback</div>
  <div>Triggers when have a new Feedback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Login Type</div>
  <div>Triggers when you choose login type of customer registration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voucher</div>
  <div>Triggers when customer get a new Voucher.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reconnect</div>
  <div>Triggers when customer reconnect to WiFi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when account have new Registration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Real Visit</div>
  <div>Triggers when you indicate the desired number of real visits (1 per day) your customer.</div>
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
          <title>Smart WiFi</title>
          <meta name="description" content={`Smart WiFi is a marketing CRM which helps HoReCa clients build a database of their guests and interact with them via marketing widgets.`} />
        </>
      ),
    },
  };
}
