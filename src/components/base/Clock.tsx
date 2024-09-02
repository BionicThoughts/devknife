// Define the functional component Clock
interface ClockProps {
  hour: number;
  minute: number;
  second: number;
}

export function Clock({ hour, minute, second }: ClockProps): JSX.Element {
  function calculateClockAngles(hour: number, minute: number, second: number) {
    // Convert 24-hour time to 12-hour time if necessary
    hour = hour % 12;

    // Calculate the angles
    const secondAngle = second * 6; // 360 degrees / 60 seconds = 6 degrees per second
    const minuteAngle = minute * 6 + second / 10; // 360 degrees / 60 minutes = 6 degrees per minute
    const hourAngle = hour * 30 + minute / 2; // 360 degrees / 12 hours = 30 degrees per hour

    return {
      hour: hourAngle,
      minute: minuteAngle,
      second: secondAngle,
    };
  }

  const angles = calculateClockAngles(hour, minute, second);


  return (
    <div className="relative flex items-center justify-end w-40 h-40 overflow-hidden rounded-full ring-gray-600 ring-1">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          // style={{ height: 1 }}
          style={{ transform: `rotate(${(i * 360) / 12}deg)` }}
          className="absolute w-1/2 origin-left flex justify-end h-[1px]"
        >
          <div className="w-1/6 h-full bg-gray-700 rounded-full" />
        </div>
      ))}

      {/* Hour hand */}
      <div
        className="absolute w-1/2 h-1 origin-left group-hover:rotate-[340deg] duration-1000 ease-in-out"
        style={{ transform: `rotate(${angles.hour - 90}deg)` }}
      >
        <div className="w-2/3 h-full bg-gray-300 rounded-full" />
      </div>
      {/* Minute hand */}
      <div
        className="absolute w-1/2 h-1 bg-gray-200 rounded-full origin-left"
        style={{ transform: `rotate(${angles.minute - 90}deg)` }}
      />

      {/* Second hand */}
      <div
        className="absolute w-1/2 h-[2px] bg-red-500 rounded-full origin-left"
        style={{ transform: `rotate(${angles.second - 90}deg)` }}
      />

      {/* Center s */}
      <div className="absolute flex justify-center flex-1 w-full ">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
      </div>
    </div>
  );
}
