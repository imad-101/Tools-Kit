import type { LucideIcon } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export default function ToolCard({
  name,
  description,
  icon: Icon,
}: ToolCardProps) {
  return (
    <div className="bg-amber-100  rounded-md p-6 transition-all hover:shadow-md ">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-amber-600 mr-2" aria-hidden="true" />
        <h3 className="text-xl font-light text-amber-800">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-sm text-amber-700 hover:text-amber-900 transition-colors underline focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
        Use {name}
      </button>
    </div>
  );
}
