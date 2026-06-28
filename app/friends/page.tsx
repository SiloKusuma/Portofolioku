import { friends } from "@/lib/friendsData";

export const metadata = {
  title: "Teman — silokusuma.dev",
};

export default function FriendsPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-3">
          Friends
        </p>
        <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">
          Teman-Teman
        </h1>
        <p className="text-sm text-neutral-600 mb-16">
          Orang-orang keren yang pernah saya ajak diskusi, ngoding bareng, atau sekadar ngobrol soal teknologi.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {friends.map((friend) => (
            <div
              key={friend.name}
              className="group border border-neutral-900 hover:border-neutral-700 rounded-xl p-5 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-medium text-neutral-400 border border-neutral-700">
                  {friend.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-medium text-sm truncate">
                    {friend.name}
                  </h3>
                  <p className="text-[11px] text-neutral-600 mt-0.5">
                    {friend.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                {friend.description}
              </p>
              {friend.url && (
                <a
                  href={friend.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[11px] text-neutral-700 hover:text-white transition-colors"
                >
                  {friend.url.replace(/^https?:\/\//, "")} &nearr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
