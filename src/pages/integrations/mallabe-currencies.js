import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="mallabe Currencies"
      description="mallabe is an automation toolchain that allows you to convert / exchange currencies on the fly. Take a look at other mallabe Integrations: - mallabe Image Processing - for image processing"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mallabe-currencies.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        mallabe Currencies Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(126, 88, 194, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">mallabe is an automation toolchain that allows you to convert / exchange currencies on the fly. Take a look at other mallabe Integrations: - mallabe Image Processing - for image processing</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Currency Converted</div>
  <div>Triggers when a currency converted event occurred.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Convert Currency</div>
  <div>Convert currencies automatically. Can be greatly used when you want to get the most current currency exchange in spreadsheets, You can also schedule a daily task to retrieve currency exchange for a specific currency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Daily Rates</div>
  <div>Get Daily Rates of Currencies. Can be greatly used when you want to get the most current currency exchange rates in spreadsheets, You can also schedule a daily task to retrieve currency exchange rates.</div>
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
          <title>mallabe Currencies</title>
          <meta name="description" content="mallabe is an automation toolchain that allows you to convert / exchange currencies on the fly. Take a look at other mallabe Integrations: - mallabe Image Processing - for image processing" />
        </>
      ),
    },
  };
}
