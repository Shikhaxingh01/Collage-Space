import * as React from "react"
import { ClubCard } from "./ClubCard"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {clubs} from "./ClubGrid"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-6xl ">
      <CarouselContent className="-ml-1">
        {clubs.map((club) => (
          <CarouselItem key={club.name} className="p-2 md:basis-1/2 lg:basis-1/3">
          <ClubCard  
             className="p-1"
           
              key={club.name}
              name={club.name}
              description={club.description}
              imageUrl={club.imageUrl}
          
          
           />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
