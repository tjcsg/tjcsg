export default function AvatarLogo({
  size,
  colour = 'text-gray-600',
}: {
  size: Number;
  colour?: String;
}) {
  return (
    <div className={`mr-2 inline h-${size} w-${size} ${colour}`}>
      <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1">
        <path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM384.8 376c4-64 56-115.2 120-119.2 74.4-4 135.2 55.2 135.2 128 0 70.4-57.6 128-128 128-73.6 0-132-62.4-127.2-136.8zM768 746.4c0 12-9.6 21.6-21.6 21.6H278.4c-12 0-21.6-9.6-21.6-21.6v-64c0-84.8 170.4-128 255.2-128 84.8 0 255.2 42.4 255.2 128l0.8 64z" />
      </svg>
    </div>
  );
}
