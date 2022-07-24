export default {
        "operationName": "repCards",
        "variables": {
            "filters": {
                "status": [
                    "COMPLETED",
                    "IN_PROGRESS"
                ]
            }
        },
        "query": "query repCards($filters: RepCardParticipationsFilters) {\n  repCards {\n    id\n    prompt\n    type\n    status\n    visibility\n    timeLimit\n    participationCount(filters: $filters)\n    createdAt\n    priority\n    activeSchedule {\n      executeAt\n      __typename\n    }\n    __typename\n  }\n}\n"
    };