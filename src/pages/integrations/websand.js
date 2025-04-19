import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Websand"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/websand.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Websand Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(96, 32, 140, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Websand makes the data management of your marketing easy, so you can create email marketing that really delivers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Booking Transaction</div>
  <div>Creates or updates a booking transaction. This is designed for Hotel or Event based users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Subscriber</div>
  <div>Creates or updates a subscriber record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suppress a Subscriber</div>
  <div>Adds a specified Subscriber email address to the global suppression list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Transaction</div>
  <div>Create or update a transaction. As part of this process, transactions will be updated to each subscriber record in Websand. If subscriber doesn\'t already exist in Websand they will be created.</div>
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
          <title>Websand</title>
        </>
      ),
    },
  };
}
