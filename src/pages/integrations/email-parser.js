import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Email Parser by Zapier"
      description={`Send emails to your custom `}@robot.zapier.com" address and extract any data! Visit http://parser.zapier.com/ for more information!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/email-parser.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Email Parser by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 157, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Send emails to your custom "@robot.zapier.com" address and extract any data! Visit http://parser.zapier.com/ for more information!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when a mailbox gets a new email. Don\'t forget to set up your parser mailboxes at</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mailbox</div>
  <div>Triggers when a new mailbox is added.</div>
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
          <title>Email Parser by Zapier</title>
          <meta name="description" content={`Send emails to your custom `}@robot.zapier.com" address and extract any data! Visit http://parser.zapier.com/ for more information!" />
        </>
      ),
    },
  };
}
