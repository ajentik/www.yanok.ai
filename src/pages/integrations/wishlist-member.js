import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WishList Member"
      description={`WishList Member is a powerful & easy to use plugin for running a membership site with WordPress. (Requires WishList Member 3.0 or higher).`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wishlist-member.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WishList Member Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(27, 105, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WishList Member is a powerful & easy to use plugin for running a membership site with WordPress. (Requires WishList Member 3.0 or higher).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Member Added to Level</div>
  <div>Triggers when a member is added to a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Cancelled From Level</div>
  <div>Triggers when a member is cancelled from a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Removed From Level</div>
  <div>Triggers when a member is removed from a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Uncancelled From Level</div>
  <div>Triggers when a member is uncancelled from a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Added</div>
  <div>Triggers when a new member is added to WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Removed</div>
  <div>Triggers when a member is removed from WishList Member.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Member</div>
  <div>Adds or updates a member in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Member to Level</div>
  <div>Adds a member to a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Member From Level</div>
  <div>Cancels a member from a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Member From Level</div>
  <div>Removes a member from a membership level in WishList Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Uncancel Member From Level</div>
  <div>Uncancels a member from a membership level in WishList Member.</div>
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
          <title>WishList Member</title>
          <meta name="description" content={`WishList Member is a powerful & easy to use plugin for running a membership site with WordPress. (Requires WishList Member 3.0 or higher).`} />
        </>
      ),
    },
  };
}
