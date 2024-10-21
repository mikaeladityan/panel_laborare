import { jakartaSans } from "../../../lib/utils";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import { ListCategories } from "./Categories/List.categories";

export default function ProductsPage() {
	return (
		<section className="mt-3">
			<div className="grid grid-cols-3 gap-5 items-start">
				<Card
					className="col-span-2"
					cardHeader={
						<>
							<h2
								className={`${jakartaSans.className} font-bold tracking-wide`}
							>
								Manajemen Layanan
							</h2>

							<Button
								title="Layanan"
								url="/"
								icon={<IconPlus size={12} stroke={3} />}
							/>
						</>
					}
				>
					<p className="text-zinc-400 mt-3 text-xs">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						hic inventore voluptate blanditiis cum perferendis aperiam esse
						illum, vero consequatur. Enim, dolor culpa ipsa ab temporibus
						maiores neque suscipit similique?
					</p>
				</Card>

				<Card
					cardHeader={
						<>
							<h2
								className={`${jakartaSans.className} font-bold tracking-wide py-2`}
							>
								Data Kategori
							</h2>
						</>
					}
				>
					<ListCategories />
				</Card>
			</div>
		</section>
	);
}
