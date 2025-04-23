import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crowdin"
      description={`Crowdin is a cloud-based solution that streamlines localization management for your team. It's the perfect place to effectively manage all of your multilingual content.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crowdin.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crowdin Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(67, 160, 71, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crowdin is a cloud-based solution that streamlines localization management for your team. It\'s the perfect place to effectively manage all of your multilingual content.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Comment/Issue Added</div>
  <div>Triggers when a user creates a comment or an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment/Issue Deleted</div>
  <div>Triggers when a user deletes a comment or an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment/Issue Restored</div>
  <div>Triggers when a user restores a deleted comment or an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment/Issue Updated</div>
  <div>Triggers when a user updates a comment or an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Directory</div>
  <div>Triggers when new directory is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Added</div>
  <div>Triggers when a new file has been added to the project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Approved</div>
  <div>Triggers when a file is fully translated and approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Deleted</div>
  <div>Triggers when a file has been deleted from the project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Reverted</div>
  <div>Triggers when a file update has been reverted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Translated</div>
  <div>Triggers when a file is fully translated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Updated</div>
  <div>Triggers when a file has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label</div>
  <div>Triggers when new label is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Language Approved</div>
  <div>Triggers when one of a project languages is fully translated and approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Language Translated</div>
  <div>Triggers when one of a project languages is fully translated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Creates a new comment or issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Directory</div>
  <div>Creates a new directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Translated File</div>
  <div>Downloads the translated file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Creates a new label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label String</div>
  <div>Assign a label to the string</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Translation Progress</div>
  <div>Get project languages translation progress.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Label From String</div>
  <div>Unassign the label from the string</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resolve Issue</div>
  <div>Set the issue resolved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create String</div>
  <div>Creates a new string.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Translate via Machine Translation</div>
  <div>Auto detect source language and translate with selected MT engine.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a File</div>
  <div>Uploads a file into Crowdin project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Screenshot</div>
  <div>Adds a screenshot to Crowdin project and tags it automatically (optional).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Directory</div>
  <div>Finds a directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find File</div>
  <div>Finds file by id or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Language</div>
  <div>Finds language by Crowdin code, locale or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Label</div>
  <div>Find label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project by id or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find String</div>
  <div>Finds a string by text.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task give.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Directory</div>
  <div>Finds a directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Label</div>
  <div>Find label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project by id or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create String</div>
  <div>Finds a string by text.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task give.</div>
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
          <title>Crowdin</title>
          <meta name="description" content={`Crowdin is a cloud-based solution that streamlines localization management for your team. It's the perfect place to effectively manage all of your multilingual content.`} />
        </>
      ),
    },
  };
}
