import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Twitter"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/twitter.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Twitter Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(45, 170, 225, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Twitter is the social network that shows what\'s happening around the world in real time. Share your ideas in Tweets, follow hashtags to keep up with trends, and join in the global conversation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Liked Tweet</div>
  <div>Triggers when a specific user likes a tweet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Follower</div>
  <div>Triggers when a user of your choosing gets a new follower.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tweet in List</div>
  <div>Triggers when there is a new tweet in a specific list you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Follower of Me</div>
  <div>Triggers when you get a new follower.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">My Tweet</div>
  <div>Triggers when you tweet something new.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search & Geo Mention</div>
  <div>Triggers from mention of search term in a specific geo location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Mention</div>
  <div>Triggers when any user creates a new Tweet that contains a specific search term (like a word, phrase, username or hashtag).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Tweet</div>
  <div>Triggers when a specific user tweets.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to List</div>
  <div>Adds a user to one of your lists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tweet</div>
  <div>Creates a tweet. Optionally, include an image, video, or GIF.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Profile Image</div>
  <div>Updates your profile image on Twitter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Users</div>
  <div>Finds information about a specific user.</div>
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
          <title>Twitter</title>
          <meta name="description" content={}/>s happening around the world in real time. Share your ideas in Tweets, follow hashtags to keep up with trends, and join in the global conversation.' />
        </>
      ),
    },
  };
}
