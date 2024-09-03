import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Dot,
} from "lucide-react";

const MONTHS = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export interface DatePickerProps {
  onChange: (date: Date) => void;
}

/**
 *
 * @param root0
 * @param root0.onChange
 */
export default function DatePicker({ onChange }: DatePickerProps) {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [no_of_days, setNumDays] = useState<number[]>([]);
  const [blankdays, setBlankDays] = useState<number[]>([]);
  const [fullDate, setFullDate] = useState<Date>(new Date());

  useEffect(() => {
    getNoOfDays();
  }, [month, year]);

  const onTodayClicked = () => {
    const newDate = new Date()
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
    const new_date = new Date(newDate)
    onChange(new_date)
    setFullDate(new_date)
  }

  const isToday = (date: number) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const isSelectedDate = (selected_date: number) => {
    const newDate = new Date(year, month, selected_date);
    return newDate.toDateString() == fullDate.toDateString();
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();

    const blankDaysArray = Array.from(
      { length: dayOfWeek },
      (_, index) => index + 1
    );
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );

    setBlankDays(blankDaysArray);
    setNumDays(daysArray);
  };

  return (
    <div className="mx-auto px-1 py-1  text-primary-content">
      <div className="w-[17rem] h-[17rem] ">
        <div className="relative">
          <AnimatePresence initial={false}>
            {(
              <motion.div
                className="bg-neutral-900/60 mt-0 rounded shadow p-3 absolute top-0 left-0 w-full"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1 },
                  collapsed: { opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="flex justify-between items-center mb-3"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1 },
                    collapsed: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div>
                    <span className="text-lg font-bold ">{MONTHS[month]}</span>
                    <span className="ml-1 text-md  font-normal ">{year}</span>
                  </div>{" "}
                  <div>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-spring-wood-100 p-0.5 rounded-full"
                      onClick={() => {
                        setYear((prev) => prev - 1);
                      }}
                    >
                      <ChevronsLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-spring-wood-100 p-0.5 rounded-full"
                      onClick={() => {
                        if (month == 0) {
                          setYear((prev) => prev - 1);
                          setMonth(11);
                        } else {
                          setMonth((prev) => prev - 1);
                        }
                      }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-spring-wood-100 p-0.5 rounded-full"
                      onClick={onTodayClicked}
                    >
                      <Dot size={16} />
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-spring-wood-100 p-0.5 rounded-full"
                      onClick={() => {
                        if (month == 11) {
                          setYear((prev) => prev + 1);
                          setMonth(0);
                        } else {
                          setMonth((prev) => prev + 1);
                        }
                      }}
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-spring-wood-100 p-0.5 rounded-full"
                      onClick={() => {
                        setYear((prev) => prev + 1);
                      }}
                    >
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-3 -mx-1 grid grid-cols-7"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1 },
                    collapsed: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {DAYS.map((day, index) => {
                    return (
                      <div className="px-1" key={index}>
                        <div
                          key={index}
                          className=" font-medium text-center text-xs w-7 "
                        >
                          {day}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
                <motion.div
                  className="flex-wrap mx-1 grid grid-cols-7"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1 },
                    collapsed: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {blankdays.map((_, index) => {
                    return (
                      <div className="px-1 mb-1" key={index}>
                        <div
                          key={index}
                          className="cursor-pointer text-center text-sm rounded-lg leading-loose w-7 "
                        >
                          { }
                        </div>
                      </div>
                    );
                  })}
                  {no_of_days.map((day, index) => {
                    return (
                      <div className="px-1 mb-1" key={index}>
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();

                            const selectedDate = new Date(year, month, day);

                            setFullDate(selectedDate);

                            onChange(new Date(year, month, day));

                          }}
                          className={`${isToday(day)
                            ? "border border-neutral-400 "
                            : ""
                            } ${isSelectedDate(day) ? "bg-primary" : "white"
                            } cursor-pointer text-center text-sm rounded-lg leading-loose w-7 hover:bg-neutral-700 transition ease-in-out`}
                        >
                          {day}
                        </button>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
