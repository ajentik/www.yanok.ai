import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Evernote Business"
      description={`Evernote Business brings the note-taking features of Evernote to your team. Capture and remember ideas and more, then collaborate on them with anyone in your company. Using Evernote on your own? Check out Evernote Personal.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/evernote-business.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Evernote Business Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(111, 181, 54, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Evernote Business brings the note-taking features of Evernote to your team. Capture and remember ideas and more, then collaborate on them with anyone in your company. Using Evernote on your own? Check out Evernote Personal.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created in or moved to a notebook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notebook</div>
  <div>Triggers when a new notebook is added to Evernote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reminder</div>
  <div>Triggers when a new reminder with a date is added to a notebook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Added to Note</div>
  <div>Triggers when a specific tag is added to a note in Evernote.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Tag Note</div>
  <div>Adds existing tags to a note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Append to Note</div>
  <div>Appends content to an existing note by title inside Evernote (it will be created first if it doesn\'t exist).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note in a notebook for Evernote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Notebook</div>
  <div>Creates a new notebook in Evernote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new tag inside Evernote. Limited to 10,000 tags in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Note</div>
  <div>Search for a note by title, optionally limited by notebook and tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Tag</div>
  <div>Search for a tag by title, optionally limited by notebook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Note</div>
  <div>Finds or creates a specific note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tag</div>
  <div>Finds or creates a specific tag.</div>
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
          <title>Evernote Business</title>
          <meta name="description" content={`Evernote Business brings the note-taking features of Evernote to your team. Capture and remember ideas and more, then collaborate on them with anyone in your company. Using Evernote on your own? Check out Evernote Personal.`} />
        </>
      ),
    },
  };
}
