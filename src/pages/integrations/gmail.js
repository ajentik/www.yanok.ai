import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Gmail"
      description="One of the most popular email services, Gmail keeps track of all your emails with threaded conversations, tags, and Google-powered search to find any message you need."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gmail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Gmail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(219, 68, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">One of the most popular email services, Gmail keeps track of all your emails with threaded conversations, tags, and Google-powered search to find any message you need.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attachment</div>
  <div>Triggers when you receive a new attachment (triggers once per attachment).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label</div>
  <div>Triggers when you add a new label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Labeled Email</div>
  <div>Triggers when you label an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when a new e-mail appears in the specified mailbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Matching Search</div>
  <div>Triggers when you receive a new email that matches a search string you provide.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Starred Email</div>
  <div>Triggers when you receive a new email and star it within two days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Thread</div>
  <div>Triggers when a new thread starts.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Label to Email</div>
  <div>Add a label to an email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft</div>
  <div>Create (but do not send) a new email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft Reply</div>
  <div>Create (but do not send) a draft of a reply to an existing email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Creates a new label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Create and send a new email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Label from Email</div>
  <div>Remove a label from an email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reply to Email</div>
  <div>Send a reply to an email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Email</div>
  <div>Finds an email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Send Email</div>
  <div>Finds or creates a specific message.</div>
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
          <title>Gmail</title>
          <meta name="description" content="One of the most popular email services, Gmail keeps track of all your emails with threaded conversations, tags, and Google-powered search to find any message you need." />
        </>
      ),
    },
  };
}
