var test = {
        welcome : 'PHQ-9是病人健康问卷的九项抑郁量表。它可以成为医生诊断抑郁症和监测治疗反应的有力工具。PHQ-9的九个项目直接基于DSM-IV（《诊断与统计手册 第四版》）中关于重性抑郁障碍的九个诊断标准。这可以帮助跟踪患者整体抑郁程度以及随着治疗改善或不改善的具体症状。',
        mainQuestion : '在过去两周里，您是否被以下任何问题困扰过？',
        subQuestions : [
                '对做事情没有兴趣或乐趣?',
                '感觉沮丧、抑郁或绝望?',
                '入睡困难或保持睡眠，或者睡得太多?',
                '感到疲劳或没有精力?',
                '食欲不振或暴饮暴食?',
                '对自己感到很差 - 或者感到自己是个失败者，辜负了自己或家人?',
                '注意力集中困难，比如阅读报纸或看电视?',
                '动作或说话速度过慢，以至于别人有可能注意到?或者相反 - 坐立不安或者不断躁动，比平常多动很多?',
                '有想过最好死了，或以某种方式伤害自己的想法吗?'
        ],
        options : [
                '完全没有',
                '有几天',
                '大部分天数',
                '几乎每天'
        ],
        professionals : [



        ],
        calculateSeverity : function(score) {
                // 严重程度水平和是否建议咨询专业人士的布尔标识
                var results = {
                        severity : '',
                        recommend : false
                };

                // 计分逻辑
                if (score < 5) {
                        results.severity = '无';
                } else if (score >= 5 && score <=9) {
                        results.severity = '轻度';
                } else if (score >= 10) {
                        // 达到中度最小要求，设置建议
                        results.recommend = true;
                  if (score >= 10 && score <= 14) {
                                results.severity = '中度';
                        } else if (score >= 15 && score <= 19) {
                                results.severity = '中度严重';
                        } else if (score >= 20) {
                                results.severity = '严重';
                        }
                }

                return results;
        }
};
