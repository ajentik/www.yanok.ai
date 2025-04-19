import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Invision Community"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/invision-community.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Invision Community Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 78, 118, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Invision Community is an independent community platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Blog Entry Comment</div>
  <div>Triggers when a new blog entry comment is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Blog</div>
  <div>Triggers when a new blog is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Blog Entry</div>
  <div>Triggers when a new blog entry is posted, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event Comment</div>
  <div>Triggers when a new calendar event comment is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is posted, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event Review</div>
  <div>Triggers when a new calendar event review is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Club</div>
  <div>Triggers when a new club is created or approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Club Deleted</div>
  <div>Triggers when a club is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pages Database Record Comment</div>
  <div>Triggers when a new comment is made on a record in a Pages database, or one is approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pages Database Record</div>
  <div>Triggers when a new record is posted, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pages Database Record Review</div>
  <div>Triggers when a new review is made on a record in a Pages database, or one is approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Downloads File Comment</div>
  <div>Triggers when a new downloads file comment is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Downloads File</div>
  <div>Triggers when a new file is posted, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Downloads File Review</div>
  <div>Triggers when a new downloads file review is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Forum Topic</div>
  <div>Triggers when a new topic is posted, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Forum Post</div>
  <div>Triggers when a new forum post is made, or approved by a moderator. Note that triggers both for new topics and replies to existing topics.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gallery Album</div>
  <div>Triggers when a new album is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gallery Image Comment</div>
  <div>Triggers when a new gallery image comment is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gallery Image</div>
  <div>Triggers when a new gallery image is uploaded, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gallery Image Review</div>
  <div>Triggers when a new gallery image review is made, or approved by a moderator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member account is created (whether by registering, created by an administrator, etc.), regardless of validation status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Deleted</div>
  <div>Triggers when a member account is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Edited</div>
  <div>Triggers when a member account data changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member Registration Completed</div>
  <div>Triggers when the member registartion is completed .</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Warned</div>
  <div>Triggers when a member account gets a warning.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Blog Entry Comment</div>
  <div>Creates a new comment on a blog entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Blog Entry</div>
  <div>Creates a new blog entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event Comment</div>
  <div>Creates a new comment on a calendar event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a new event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event Review</div>
  <div>Creates a new review on a calendar event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pages Database Record Comment</div>
  <div>Creates a new comment on a record in a Pages database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pages Database Record</div>
  <div>Creates a new record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pages Database Record Review</div>
  <div>Creates a new review on a record in a Pages database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a new member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Secondary Group</div>
  <div>Adds a secondary group to a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a Secondary Group</div>
  <div>Removes a secondary group from a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Downloads File Comment</div>
  <div>Creates a new comment on a downloads file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Downloads File</div>
  <div>Creates a new file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Downloads File Review</div>
  <div>Creates a new review on a downloads file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Forum Topic Post</div>
  <div>Creates a new post within a topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Forum Topic</div>
  <div>Creates a new topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Gallery Image Comment</div>
  <div>Creates a new comment on a gallery image.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Gallery Image</div>
  <div>Creates a new image.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Gallery Image Review</div>
  <div>Creates a new review on a gallery image.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Blog</div>
  <div>Search for a Blog by the id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Blog Category</div>
  <div>Search for a Blog Category by the id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Club</div>
  <div>Search for a Club by the id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Search for a member by name or email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Topic</div>
  <div>Search for a topic by the topic id</div>
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
          <title>Invision Community</title>
        </>
      ),
    },
  };
}
