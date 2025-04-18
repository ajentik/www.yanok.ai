import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WordPress Website Creator"
      description="wp-website-creator allows you to install wordpress websites on your own server or our cloud server. Install websites directly from your APP"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wp-website-creator.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WordPress Website Creator Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(34, 143, 207, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">wp-website-creator allows you to install wordpress websites on your own server or our cloud server. Install websites directly from your APP</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Error Messages During the Installation</div>
  <div>Triggers when a error coming up. Installation on remote servers is very complex. Multiple API requests to create accounts, databases and domains. If there are any error messages you can fetch them via this trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get New Website Credentials</div>
  <div>Triggers when the website is successfully created. With this zap you can retrieve the data of your created websites. For example, you can retrieve the domain, username and password of a website to save it in your crm and/or send an email with access data to your new customer.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Website on a Cpanel</div>
  <div>With this Zap you can automatically install wordpress websites on a customer cpanel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Website on Your Own Agency Server or cPanel</div>
  <div>With this Zap you can automatically install wordpress websites on your own WHM Server, Plesk Server or cPanel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Website on Wp-Website-Creator Cloud</div>
  <div>If you do not have your own server, use this zap to create a website on wp-website-creator cloud. Depending on your membership the website will be stored on our server for 7,14 or 30 days.</div>
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
          <title>WordPress Website Creator</title>
          <meta name="description" content="wp-website-creator allows you to install wordpress websites on your own server or our cloud server. Install websites directly from your APP" />
        </>
      ),
    },
  };
}
