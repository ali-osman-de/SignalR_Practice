using Microsoft.AspNetCore.SignalR;
using SignalR_Practice.API.DataService;
using SignalR_Practice.API.Models;

namespace SignalR_Practice.API.Hubs;

public class ChatHub : Hub
{
    private readonly ShareDb _shared;
    public ChatHub(ShareDb shared) => _shared = shared;

    public async Task ReceiveMessage(UserConnection conn)
    {
        await Clients.All
            .SendAsync("ReceiveMessage", "admin", $"{conn.UserName} has joined the chat");
    }

    public async Task JoinSpecificChatRoom(UserConnection conn)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);

        _shared.connections[Context.ConnectionId] = conn;

        await Clients.Group(conn.ChatRoom)
            .SendAsync("ReceiveSpecificMessage", "admin", $"{conn.UserName} joined {conn.ChatRoom} chatroom");
    }

    public async Task SendMessage(String msg)
    {
        if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
        {
            await Clients.Group(conn.ChatRoom)
                .SendAsync("ReceiveSpecificMessage", conn.UserName, msg);
        }
    }

    public async Task ShowAllUsers()
    {
        if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
        {
            var users = _shared.connections.Select(x => x.Value.ChatRoom = conn.ChatRoom).ToList();
            await Clients.Group(conn.ChatRoom)
                .SendAsync("ShowAllUsers", users);
        }
    }
    
    
}