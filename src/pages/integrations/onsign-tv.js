import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OnSign TV"
      description="The OnSign TV app allows multiple triggers and actions related to your content."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onsign-tv.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OnSign TV Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 119, 181, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The OnSign TV app allows multiple triggers and actions related to your content.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Report</div>
  <div>Triggers when a new report is ready for download.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Player Offline</div>
  <div>Triggers when a player goes offline.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Upload a File and Add It to a Playlist</div>
  <div>Uploads the file and add it to the desired Playlist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Tag to a Player</div>
  <div>Adds a Player Tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Attribute</div>
  <div>Updates the value of a player custom attribute</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Uploads the file to your OnSign TV account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Play a Campaign or Playlist on Demand</div>
  <div>Plays a Campaign or Playlist on demand</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a File From a Playlist</div>
  <div>Removes a file from a Playlist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a Tag From a Player</div>
  <div>Removes a tag from a player</div>
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
          <title>OnSign TV</title>
          <meta name="description" content="The OnSign TV app allows multiple triggers and actions related to your content." />
        </>
      ),
    },
  };
}
