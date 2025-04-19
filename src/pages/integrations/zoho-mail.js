import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zoho Mail"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoho-mail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zoho Mail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 129, 194, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zoho Mail is a collaborative business communication platform for the modern workforce. It is a blend of classic email and the modern collaboration tools using comments, likes and sharing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when you receive a new email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Matching Search</div>
  <div>Triggers when you receive a new email that matches given conditions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tagged Email</div>
  <div>Triggers when a new email is received and you tag it within two days.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft</div>
  <div>Create (but do not send) a new email message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a new folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Create and send a new email message.</div>
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
          <title>Zoho Mail</title>
        </>
      ),
    },
  };
}
