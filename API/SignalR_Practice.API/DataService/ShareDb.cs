using System.Collections.Concurrent;
using SignalR_Practice.API.Models;

namespace SignalR_Practice.API.DataService;

public class ShareDb
{
    private readonly ConcurrentDictionary<string, UserConnection> _connections = new ();
    
    public ConcurrentDictionary<string, UserConnection> connections => _connections;
}