import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="InsTrack"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/instrack-app.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        InsTrack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(115, 103, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">InsTrack offers powerful in-depth Instagram analytics and actionable insights for brands, influencers and agencies.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Account</div>
  <div>Add an Instagram account to your dashboard</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Account to Group</div>
  <div>Add an Instagram account on your dashboard to an existing group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Associate Account With Client</div>
  <div>Associate an Instagram account on your dashboard to an existing client to start receiving periodic email reports for that account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Create a new client to receive periodic email reports for tracked accounts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Create a new group to organize your tracked accounts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Account</div>
  <div>Remove an Instagram account from your dashboard</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Client</div>
  <div>Remove an existing client</div>
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
          <title>InsTrack</title>
        </>
      ),
    },
  };
}
