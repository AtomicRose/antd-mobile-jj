const mams = {
    "broker": {
        apiPath: '/CM_WorkbenchLoading/WD_COMM_GetEmpBrokerList',
        systemPath: '/broker/redirect',
        accountKey: 'BrokerList',
        name: '经纪人工作台'
    },
    "hub": {
        apiPath: '/CM_WorkbenchLoading/WD_COMM_GetEmpHubList',
        systemPath: '/ec/redirect',
        accountKey: 'HubList',
        name: '集散工作台'
    },
    "finance": {
        apiPath: '/CM_WorkbenchLoading/WD_COMM_GetEmpFinanceList',
        systemPath: '/fc/redirect',
        accountKey: 'FinanceList',
        name: '财务工作台'
    },
    "biz": {
        apiPath: '/CM_WorkbenchLoading/WD_COMM_GetEmpSalesList',
        systemPath: '/bc/redirect',
        accountKey: 'SalesList',
        name: '业务工作台'
    },
    "op": {
        apiPath: '',
        systemPath: '/op/redirect',
        accountKey: '',
        name: '运维工作台'
    },
    "audit": {
        apiPath: '/CM_WorkbenchLoading/WD_COMM_GetEmpAuditList',
        systemPath: '/audit/redirect',
        accountKey: 'AuditList',
        name: '审核工作台'
    },
    "hr": {
        apiPath: '',
        systemPath: '/hr/login',
        accountKey: '',
        name: '人事工作台'
    },
    "brokerass": {
        apiPath: '',
        systemPath: '/broker/login',
        accountKey: '',
        name: '经纪人助理工作台'
    }

};
export default mams;