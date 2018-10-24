if (0 || !localStorage.getItem('AriaNg.Options')) {
    localStorage.setItem('AriaNg.Options', JSON.stringify({
      "language": "",
      "title": "${downspeed}, ${upspeed} - ${title}",
      "titleRefreshInterval": 5000,
      "browserNotification": false,
      "rpcAlias": "Default server",
      "rpcHost": location.hostname,
      "rpcPort": location.port || ((location.protocol === 'http:') ? 80 : 443),
      "rpcInterface": "jsonrpc",
      "protocol": location.protocol.replace(':', ''),
      "httpMethod": "POST",
      "secret": "",
      "extendRpcServers": [],
      "globalStatRefreshInterval": 3000,
      "downloadTaskRefreshInterval": 3000,
      "rpcListDisplayOrder": "recentlyUsed",
      "afterCreatingNewTask": "task-list",
      "removeOldTaskAfterRestarting": false,
      "displayOrder": "default:asc",
      "fileListDisplayOrder": "default:asc",
      "peerListDisplayOrder": "default:asc"
    }));
  }
  