import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GitHub"
      description="GitHub is the perfect place to share code and work collaboratively on private and open source software."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/github.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GitHub Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 131, 196, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GitHub is the perfect place to share code and work collaboratively on private and open source software.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Branch</div>
  <div>Triggered when a new branch is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Collaborator</div>
  <div>Triggered when you add a new collaborator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Commit Comment</div>
  <div>Triggered when a new comment on a commit is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Commit</div>
  <div>Triggered when a new commit is created. Select your organization, repo and branch.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Repo Event</div>
  <div>Triggered when anything happens on a repo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gist</div>
  <div>Triggered when you add/star a gist (public or private).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Global Event</div>
  <div>Triggered when anything happens from or to you, on any repo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Issue</div>
  <div>Triggered when a new issue is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label</div>
  <div>Triggered when a new label is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Mention</div>
  <div>Triggers when your Github username is mentioned in a Commit, Comment, Issue or Pull Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestone</div>
  <div>Triggered when a new milestone is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notification</div>
  <div>Triggered when a new notification is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggered when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pull Request</div>
  <div>Triggered when a new pull request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Release</div>
  <div>Triggered when a new release is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Repository</div>
  <div>Triggered when a new repository is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Review Request</div>
  <div>Triggered when a review is requested from you or a specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team</div>
  <div>Triggered when you are added to a team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Watcher</div>
  <div>Triggered when a new watcher is added to a repo.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Creates a new comment in an Issue or Pull Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Branch</div>
  <div>Deletes an unwanted branch</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Gist</div>
  <div>Creates a new gist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Issue</div>
  <div>Create a new issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pull Request</div>
  <div>Create a new pull request and merge it (optional).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submit Review</div>
  <div>Submits a pull request review</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Issue</div>
  <div>Update an existing issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Pull Request</div>
  <div>Update an existing pull request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check Organization Membership</div>
  <div>Finds a specific members.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Find an organization, whether or not you are a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Repository</div>
  <div>Find a specific repository</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Issue</div>
  <div>Finds a specific repo issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Pull Request</div>
  <div>Finds a specific repo pull.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a specific user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Issue</div>
  <div>Finds or creates a specific repo issue by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Pull Request</div>
  <div>Finds or creates a specific repo pull by title.</div>
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
          <title>GitHub</title>
          <meta name="description" content="GitHub is the perfect place to share code and work collaboratively on private and open source software." />
        </>
      ),
    },
  };
}
