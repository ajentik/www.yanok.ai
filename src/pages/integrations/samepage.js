import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Samepage"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/samepage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Samepage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(98, 188, 70, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Samepage is a team collaboration platform that brings people together to get work done in one place. Discuss ideas, share files, assign tasks, and finish projects – all in real time, and all from one app.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Discussion</div>
  <div>Creates a new Discussion in a specific Folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event to a specific Calendar, Page, Sheet or Mindmap agenda.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a new folder in your organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Page</div>
  <div>Creates a new page in a specific folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task to a specific task board, page, sheet or calendar agenda.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Old Samepage] Post Page Chat Message</div>
  <div>Posts a new chat message to a specific page in a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Chat Message</div>
  <div>Posts a new chat message to a specific Page, Task Board, Sheet, Mindmap, Calendar or Chat document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Old Samepage] Create Team</div>
  <div>Creates a new team in your organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Old Samepage] Post Team Chat Message</div>
  <div>Posts a new chat message to a specific team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Old Samepage] Create Team Page</div>
  <div>Creates a new page in a specific team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Old Samepage] Create Team Task</div>
  <div>Creates a new task in a specific team.</div>
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
          <title>Samepage</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
