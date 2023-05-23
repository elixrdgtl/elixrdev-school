import { Blog } from "@/db/models/blog"

export default async function BlogPage() {
    const data = Blog.findAll();
    return (
        <div>
            {(await data).map((val, key) => {
                return (
                    <div>
                        {val.get()}
                    </div>
                )
            })}
        </div>
    )
}