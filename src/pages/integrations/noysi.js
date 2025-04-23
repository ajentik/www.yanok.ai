import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Noysi"
      description={`Noysi is an Intelligent Communication Services Platform. Noysi unifies the tools needed to increase efficiency in companies.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/noysi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Noysi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 18, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Noysi is an Intelligent Communication Services Platform. Noysi unifies the tools needed to increase efficiency in companies.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Channel</div>
  <div>Triggers when a new message is posted to a specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mention</div>
  <div>Triggers when a username is mentioned in a public #channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Public Message Posted Anywhere</div>
  <div>Triggers when a new message is posted to any public channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Posted to Private Group</div>
  <div>Triggers when a new message is posted to a specific private group</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Channel Message</div>
  <div>Post a new message to a specific #channel you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Group Message</div>
  <div>Post a new message to a specific private group you choose.</div>
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
          <title>Noysi</title>
          <meta name="description" content={`Noysi is an Intelligent Communication Services Platform. Noysi unifies the tools needed to increase efficiency in companies.`} />
        </>
      ),
    },
  };
}
