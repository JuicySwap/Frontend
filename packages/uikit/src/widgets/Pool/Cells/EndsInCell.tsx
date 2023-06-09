import { Flex, TimerIcon, useTooltip } from "@pancakeswap/uikit";
import getTimePeriods from "@pancakeswap/utils/getTimePeriods";
import { useTranslation } from "@pancakeswap/localization";
import { useMemo } from "react";
import { CellContent, BaseCell } from "./BaseCell";
import { Text } from "../../../components/Text";
import { DeserializedPool } from "../types";

interface EndsInCellProps<T> {
  pool: DeserializedPool<T>;
  getNow: () => number;
}

interface EndTimeTooltipComponentProps {
  endTime: number;
}

const EndTimeTooltipComponent: React.FC<React.PropsWithChildren<EndTimeTooltipComponentProps>> = ({ endTime }) => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation();

  return (
    <>
      <Text bold>{t("End Time")}:</Text>
      <Text>
        {new Date(endTime * 1000).toLocaleString(locale, {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </Text>
    </>
  );
};

export function EndsInCell<T>({ pool, getNow }: EndsInCellProps<T>) {
  const { t } = useTranslation();

  const { endBlock = 0 } = pool;

  const currentDate = getNow() / 1000;
  const poolTimeRemaining = endBlock - currentDate;
  const endTimeObject = useMemo(() => getTimePeriods(poolTimeRemaining), [poolTimeRemaining]);

  const {
    targetRef: endTimeTargetRef,
    tooltip: endTimeTooltip,
    tooltipVisible: endTimeTooltipVisible,
  } = useTooltip(<EndTimeTooltipComponent endTime={endBlock} />, {
    placement: "top",
  });

  return (
    <BaseCell role="cell" flex={["1 0 50px", "1 0 50px", "2 0 100px", "2 0 100px", "1 0 120px"]}>
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t("Ends in")}
        </Text>
        <Flex alignItems="center">
          <Text color="textSubtle" small>
            {poolTimeRemaining > 0
              ? endTimeObject?.totalDays
                ? endTimeObject?.totalDays === 1
                  ? t("1 day")
                  : t("%days% days", { days: endTimeObject?.totalDays })
                : t("< 1 day")
              : t("%days% days", { days: 0 })}
          </Text>
          <span ref={endTimeTargetRef}>
            <TimerIcon ml="4px" color="primary" />
            {endTimeTooltipVisible && endTimeTooltip}
          </span>
        </Flex>
      </CellContent>
    </BaseCell>
  );
}
