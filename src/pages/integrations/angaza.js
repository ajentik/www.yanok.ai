import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Angaza"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/angaza.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Angaza Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 133, 155, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Angaza is a business solution designed for last-mile distributors of products and services in emerging markets. Angaza allows you to unlock new markets and sell more products — from solar lighting systems to clean cookstoves.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect</div>
  <div>Triggers when a new prospect is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Overdue Accounts</div>
  <div>Provide number of days overdue and list of account that match filter are returned</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Paid Off</div>
  <div>Triggers when an account is paid off. In the Hub, these are accounts with an "Unlocked" status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Prospect Status</div>
  <div>Triggers when a prospect has a new status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospective Account</div>
  <div>Creates a prospective account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task.</div>
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
          <title>Angaza</title>
        </>
      ),
    },
  };
}
