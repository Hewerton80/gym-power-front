"use client";
import Image from "next/image";
import { BsFillPlayFill, BsStopCircle } from "react-icons/bs";
import { IconButton } from "../../buttons/IconButton";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/buttons/Button";

interface ExerciseCardProps {
  workoutStatus?: string;
  exercise?: any;
}

export function ExerciseCard({ exercise, workoutStatus }: ExerciseCardProps) {
  const [isRunning, setIsRunnig] = useState(false);

  const handleChanExerciciStatus = useCallback(() => {
    setIsRunnig((currentStatus) => !currentStatus);
  }, []);

  return (
    <div className="flex gap-4 pb-4 border-b border-border">
      <Image
        className="w-[7.5rem]"
        width={120}
        height={135}
        alt="exercice"
        src="https://raw.githubusercontent.com/jailson-souza/gym-microservice/main/images/rosca-biceps-direta-na-barra-ez.png"
      />
      <div className="flex flex-col ">
        <h3 className="font-semibold text-heading  mb-2">Supino reto</h3>

        <p className="line-clamp-3 text-sm mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>

        <div className="flex items-center justify-between gap-1">
          <span className="mt-auto">Em progresso</span>
          {/* <IconButton
            variantStyle="success"
            icon={isRunning ? <BsPause /> : <BsFillPlayFill />}
          /> */}
          <Button
            // leftIcon={
            //   isRunning ? (
            //     <></>
            //   ) : (
            //     <BsFillPlayFill size={20} onClick={handleChanExerciciStatus} />
            //   )
            // }
            variantStyle={isRunning ? "danger" : "primary"}
            onClick={handleChanExerciciStatus}
          >
            <span className="inline-flex">
              <span className="mr-2">
                {isRunning ? <BsStopCircle /> : <BsFillPlayFill />}
              </span>
              {isRunning ? "Finalizar" : "Iniciar"} exercício
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
