import { useEffect, useRef, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"
import axios from "axios"
import { Button } from "@/components/ui/button"

type dataType = {
    id: number
    name: string
    status: string
    species: string
    image: string
}

const styles: Record<string, string> = {
    Dead: "bg-destructive",
    Alive: "bg-green-500",
    unknown: "bg-orange-500",
}

const TableComponent = () => {
    const [data, setData] = useState<dataType[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const [mode, setMode] = useState<"pagination" | "infinite">("pagination")

    const observerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://rickandmortyapi.com/api/character?page=${page}`
                )

                setTotalPages(res.data.info.pages)

                if (mode === "infinite") {
                    setData((prev) => [...prev, ...res.data.results])
                } else {
                    setData(res.data.results)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [page, mode])

    useEffect(() => {
        setData([])
        setPage(1)
    }, [mode])

    useEffect(() => {
        if (mode !== "infinite") return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && page < totalPages) {
                    setPage((prev) => prev + 1)
                }
            },
            { threshold: 1 }
        )

        if (observerRef.current) {
            observer.observe(observerRef.current)
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current)
            }
        }
    }, [mode, page, totalPages])

    return (
        <div className="border rounded-md overflow-y-scroll h-[500px]">

            <div className="flex gap-4 p-3">
                <Button
                    variant={"purple"}
                    onClick={() => setMode("pagination")}
                    className={`px-3 py-1 rounded ${mode === "pagination" ? "scale-120" : ""}`}
                >
                    Pagination
                </Button>
                <Button
                    variant={"purple"}
                    onClick={() => setMode("infinite")}
                    className={`px-3 py-1 rounded ${mode === "infinite" ? "scale-120" : ""}`}
                >
                    Infinite Scroll
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Species</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((field) => (
                        <TableRow key={field.id}>
                            <TableCell>
                                <img
                                    src={field.image}
                                    alt={field.name}
                                    className="w-8 h-8 rounded-full"
                                />
                            </TableCell>

                            <TableCell>{field.name}</TableCell>

                            <TableCell>
                                <span
                                    className={`px-2 py-0.5 text-sm rounded-full ${styles[field.status] || "bg-muted"
                                        }`}
                                >
                                    {field.status}
                                </span>
                            </TableCell>

                            <TableCell>{field.species}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* OBSERVER TARGET */}
            {mode === "infinite" && (
                <div ref={observerRef} className="h-10 flex items-center justify-center">
                    Loading...
                </div>
            )}

            {/* PAGINATION */}
            {mode === "pagination" && (
                <div className="w-full flex">
                    <div className="ml-auto p-4">
                        <Pagination>
                            <PaginationContent>
                                {page > 1 && (
                                    <PaginationItem>
                                        <PaginationLink
                                            onClick={() =>
                                                setPage((p) => Math.max(p - 1, 1))
                                            }
                                        >
                                            Prev
                                        </PaginationLink>
                                    </PaginationItem>
                                )}

                                {[...Array(totalPages)].slice(0, 5).map((_, i) => {
                                    const p = i + 1
                                    return (
                                        <PaginationItem key={p}>
                                            <PaginationLink
                                                onClick={() => setPage(p)}
                                                isActive={page === p}
                                            >
                                                {p}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                })}

                                {page < totalPages && (
                                    <PaginationItem>
                                        <PaginationLink
                                            onClick={() =>
                                                setPage((p) =>
                                                    Math.min(p + 1, totalPages)
                                                )
                                            }
                                        >
                                            Next
                                        </PaginationLink>
                                    </PaginationItem>
                                )}
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TableComponent