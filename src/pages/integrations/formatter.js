import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Formatter by Zapier"
      description={`Data isn't always in the format you need. Perhaps a date is in International format, but your app needs it in American format. Or maybe you need to Title Case a subject, truncate text for a Tweet, or turn Markdown text into HTML for your blog. Zapier's Formatter tool can help.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/formatter.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Formatter by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 74, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Data isn\'t always in the format you need. Perhaps a date is in International format, but your app needs it in American format. Or maybe you need to Title Case a subject, truncate text for a Tweet, or turn Markdown text into HTML for your blog. Zapier\'s Formatter tool can help.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Date / Time</div>
  <div>Work with dates and times to change formatting or add/subtract time (with line-item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Numbers</div>
  <div>Work with numeric data to do math operations, reformat currencies, and more (with line-item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Text</div>
  <div>Work with text data to find &amp; replace, capitalize, remove HTML, and more (with line-item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Utilities</div>
  <div>Various utilities like "choose value from list" or "look up in table" (with line-item support).</div>
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
          <title>Formatter by Zapier</title>
          <meta name="description" content={`Data isn't always in the format you need. Perhaps a date is in International format, but your app needs it in American format. Or maybe you need to Title Case a subject, truncate text for a Tweet, or turn Markdown text into HTML for your blog. Zapier's Formatter tool can help.`} />
        </>
      ),
    },
  };
}
