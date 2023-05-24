
export default async function BlogPage() {
    const data = [{}];
    return (
        <div>
            {(await data).map((val, key) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}