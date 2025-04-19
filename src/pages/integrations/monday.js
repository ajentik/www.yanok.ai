import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="monday.com"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/monday.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        monday.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(250, 183, 21, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">monday.com helps you move projects forward fast, letting everyone know what\'s been done on a task—and what needs finished right now.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Any Column Value Changed in Board</div>
  <div>Triggers when any column\'s value is changed in the selected board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item in Board</div>
  <div>Triggers when an item is created in a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a new board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Specific Column Value Changed in Board</div>
  <div>Triggers when a specific column\'s value changes in the selected board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Update in Board</div>
  <div>Triggers when a new update is posted on a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user joins your monday.com account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive Board</div>
  <div>Archives a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Group</div>
  <div>Archives a specific group in a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Item</div>
  <div>Archives an item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item Name</div>
  <div>Update an item\'s name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Multiple Columns Value</div>
  <div>Change multiple column values of an item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Board</div>
  <div>Creates a new board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Column</div>
  <div>Create a new column in board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a new group in a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Create a new Item in a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subitem</div>
  <div>Create a new subitem in a item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Update</div>
  <div>Create a new update.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Group</div>
  <div>Delete a specific group from a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Item</div>
  <div>Delete an item from a board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Position</div>
  <div>Duplicate a group with its items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File to Specific Column</div>
  <div>Upload File To Specific Column</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Item by Column Value</div>
  <div>The column that you want to search for a specific value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Board Values</div>
  <div>Returns the data for a all columns in the specific board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Column Values</div>
  <div>Returns the data for a specific column in the board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get File Column Values</div>
  <div>Returns the data for a specific file column in the board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Group Details</div>
  <div>Returns the group name for a specific board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Subitem Values</div>
  <div>Returns the subitems for a specific item in the board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Details</div>
  <div>Returns the details for a specific user</div>
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
          <title>monday.com</title>
        </>
      ),
    },
  };
}
